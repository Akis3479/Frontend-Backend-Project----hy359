/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gr.csd.uoc.cs359.winter2020.photobook;

import com.google.gson.Gson;
import gr.csd.uoc.cs359.winter2020.photobook.db.CommentDB;
import gr.csd.uoc.cs359.winter2020.photobook.db.PostDB;
import gr.csd.uoc.cs359.winter2020.photobook.db.UserDB;
import gr.csd.uoc.cs359.winter2020.photobook.model.Comment;
import gr.csd.uoc.cs359.winter2020.photobook.model.Post;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Akis Sougias
 */
@WebServlet(name = "mypost", urlPatterns = {"/mypost"})
public class mypost extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        try {
            String typeOf = request.getParameter("typeU");
            String json = "false";
            //  Retutn JSON file with Top10RecentPosts
            if ("allposts".equals(typeOf)) {
                List<Post> tenPosts = PostDB.getTop10RecentPosts();

                json = new Gson().toJson(tenPosts);
                //Creation and submiting to database a user post
            } else if ("userpost".equals(typeOf)) {
                String username = "default";
                //Retrieving username from cookies
                Cookie[] cookies = request.getCookies();
                String cookieName = "User";
                for (Cookie cookie : cookies) {
                    if (cookieName.equals(cookie.getName())) {
                        username = cookie.getValue();
                    }
                }

                // Get parameters from front end
                //String user = request.getParameter("user");
                String post = request.getParameter("post");
                String lon = request.getParameter("lon");
                String lat = request.getParameter("lat");
                String timeStamp = request.getParameter("time");
                String image = request.getParameter("image_base64");
                image = "data:image/png;base64," + image;

                // Creating MyPost
                Post myPost = new Post();
                myPost.setUserName(username);
                myPost.setDescription(post);
                myPost.setLatitude(lat);
                myPost.setLongitude(lon);
                myPost.setCreatedAt(timeStamp);
                myPost.setImageBase64(image);
                PostDB.addPost(myPost);

                json = new Gson().toJson(myPost);
            } // Retutn JSON file with Top10RecentPostsOfUser
            else if ("profileposts".equals(typeOf)) {
                String username = "default";
                //Retrieving username from cookies
                Cookie[] cookies = request.getCookies();
                String cookieName = "User";
                for (Cookie cookie : cookies) {
                    if (cookieName.equals(cookie.getName())) {
                        username = cookie.getValue();
                    }
                }
                List<Post> profilePosts = PostDB.getTop10RecentPostsOfUser(username);
                json = new Gson().toJson(profilePosts);
                //Case:  delete a post
            } else if ("deletepost".equals(typeOf)) {
                String getpostNum = request.getParameter("postNum");
                int postNum = Integer.parseInt(getpostNum);
                //Retrieving username from cookies
                String username = "default";
                Cookie[] cookies = request.getCookies();
                String cookieName = "User";
                for (Cookie cookie : cookies) {
                    if (cookieName.equals(cookie.getName())) {
                        username = cookie.getValue();
                    }
                }
                List<Post> profilePosts = PostDB.getTop10RecentPostsOfUser(username);
                int postID = profilePosts.get(postNum).getPostID();
                PostDB.deletePost(postID);

                List<Post> newprofilePosts = PostDB.getTop10RecentPostsOfUser(username);
                json = new Gson().toJson(newprofilePosts);
                //Case:  edit a post
            } else if ("editpost".equals(typeOf)) {
                String getpostNum = request.getParameter("postNum");
                String newText = request.getParameter("newText");
                int postNum = Integer.parseInt(getpostNum);
                //Retrieving username from cookies
                String username = "default";
                Cookie[] cookies = request.getCookies();
                String cookieName = "User";
                for (Cookie cookie : cookies) {
                    if (cookieName.equals(cookie.getName())) {
                        username = cookie.getValue();
                    }
                }
                List<Post> profilePosts = PostDB.getTop10RecentPostsOfUser(username);   //Search for the post
                int postID = profilePosts.get(postNum).getPostID();
                //Edit the post
                Post newPost = PostDB.getPost(postID);
                newPost.setDescription(newText);
                PostDB.updatePost(newPost);
                //Get 10 recent posts again and return them
                List<Post> newprofilePosts = PostDB.getTop10RecentPostsOfUser(username);
                json = new Gson().toJson(newprofilePosts);
            } else if ("deleteuser".equals(typeOf)) {           //DELETE USER (posts,comments,ratings,user)
                //get username from cookies
                String username = "default";                //USERNAME
                Cookie[] cookies = request.getCookies();
                String cookieName = "User";
                for (Cookie cookie : cookies) {
                    if (cookieName.equals(cookie.getName())) {
                        username = cookie.getValue();
                    }
                }
                // get ALL posts in a list
                List<Post> allPosts = PostDB.getPosts();
                List<Comment> allComments = CommentDB.getComments();

                for (int i = 0; i < allPosts.size(); i++) {
                    if (allPosts.get(i).getUserName() == username) {
                        int postID = allPosts.get(i).getPostID();       //Delete all Post of the user ( with Username = username)
                        PostDB.deletePost(postID);

                    }
                }

                for (int i = 0; i < allComments.size(); i++) {
                    if (allComments.get(i).getUserName() == username) {
                        int commentID = allComments.get(i).getID();
                        PostDB.deletePost(commentID);
                    }
                }

                UserDB.deleteUser(username);

            } else if ("returnposition".equals(typeOf)) {        //  CASE POSITION, return post for taking lon and lat
                //get username from cookies
                String username = "default";                //USERNAME
                Cookie[] cookies = request.getCookies();
                String cookieName = "User";
                for (Cookie cookie : cookies) {
                    if (cookieName.equals(cookie.getName())) {
                        username = cookie.getValue();
                    }
                }
                String postnum = request.getParameter("postnum");
                int postNum = Integer.parseInt(postnum);
                List<Post> homePosts = PostDB.getTop10RecentPosts();
                Post post = homePosts.get(postNum);
                json = new Gson().toJson(post);

            }

            response.setContentType("application/json");
            response.setCharacterEncoding("UTF-8");
            try (PrintWriter out = response.getWriter()) {
                out.println(json);
            }
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(mypost.class.getName()).log(Level.SEVERE, null, ex);
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

}
