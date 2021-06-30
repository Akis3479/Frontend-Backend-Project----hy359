/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gr.csd.uoc.cs359.winter2020.photobook;

import com.google.gson.Gson;
import gr.csd.uoc.cs359.winter2020.photobook.db.CommentDB;
import gr.csd.uoc.cs359.winter2020.photobook.db.PostDB;
import gr.csd.uoc.cs359.winter2020.photobook.model.Comment;
import gr.csd.uoc.cs359.winter2020.photobook.model.Post;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
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
@WebServlet(name = "mycomment", urlPatterns = {"/mycomment"})
public class mycomment extends HttpServlet {

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
            System.out.println("EXW MPEI STIN COMMENTS");
            if ("allcomments".equals(typeOf)) {
                List<Post> tenPosts = PostDB.getTop10RecentPosts();
                ArrayList<List<Comment>> allComments = new ArrayList<List<Comment>>();
                for (int i = 0; i < 10; i++) {
                    int postID = tenPosts.get(i).getPostID();
                    allComments.add(CommentDB.getComments(postID));

                }
                json = new Gson().toJson(allComments);
            }
            if ("addcomment".equals(typeOf)) {
                String getpostNum = request.getParameter("postNum");
                String newComment = request.getParameter("newComment");
                String timeStamp = request.getParameter("time");
                int postNum = Integer.parseInt(getpostNum);

                List<Post> profilePosts = PostDB.getTop10RecentPosts();   //Search for the post
                int postID = profilePosts.get(postNum).getPostID();

                Comment comment = new Comment();

                String username = "default";
                Cookie[] cookies = request.getCookies();
                String cookieName = "User";
                for (Cookie cookie : cookies) {
                    if (cookieName.equals(cookie.getName())) {
                        username = cookie.getValue();
                    }
                }

                comment.setUserName(username);

                comment.setComment(newComment);

                comment.setPostID(postID);

                comment.setCreated(timeStamp);

                CommentDB.addComment(comment);

                List<Comment> postComments;
                postComments = CommentDB.getComments(postID);

                json = new Gson().toJson(postComments);
            }

        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        try (PrintWriter out = response.getWriter()) {
            out.println(json);
            }
        } catch (ClassNotFoundException ex) {
            Logger.getLogger(mycomment.class.getName()).log(Level.SEVERE, null, ex);
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
