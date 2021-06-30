/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package gr.csd.uoc.cs359.winter2020.photobook;

import com.google.gson.Gson;
import gr.csd.uoc.cs359.winter2020.photobook.model.User;
import gr.csd.uoc.cs359.winter2020.photobook.db.UserDB;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.Random;
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
@WebServlet(name = "infoCheck", urlPatterns = {"/infoCheck"})
public class infoCheck extends HttpServlet {

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
            String typeOfField = request.getParameter("typeU");
            //Check Username validation
            if ("username".equals(typeOfField)) {
                String myReq = request.getParameter("dataU");
                Boolean validUser = UserDB.checkValidUserName(myReq);
                response.setContentType("application/json");
                try (PrintWriter out = response.getWriter()) {
                    if (myReq.matches("[a-zA-Z0-9]*") && (myReq.length() > 7) && validUser) {
                        out.println(true);
                    } else if (validUser == false) {
                        out.println("The username already exists");
                    } else if (myReq.matches("[a-zA-Z0-9]*") == false || myReq.length() < 8) {
                        out.println("Invalid pattern");
                    }
                }
            }
            //Check passwordPattern
            if ("psw".equals(typeOfField)) {
                String data = request.getParameter("data");
                //String pattern = "^(?=.[0-9])(?=.[a-z])(?=.[A-Z])(?=.[@#$%^&+=])(?=\\S+$).{8,}$";
                //Boolean passMatch;
                //passMatch = data.matches("^(?=.[0-9])(?=.[a-z])(?=.[A-Z])(?=.[@#$%^&+=])(?=\\S+$).{8,}$");
                response.setContentType("application/json");
                try (PrintWriter out = response.getWriter()) {
                    if (data.matches("^(?=.*\\d)(?=.*[A-Z])(?=.*[a-z])(?=.*[^\\w\\d\\s:])([^\\s]){8,16}$")) {
                        out.println(true);
                    } else {
                        System.out.println(data);
                        out.println(false);
                    }
                }

            }            //Check passwordConfirm == password
            if ("pswRpt".equals(typeOfField)) {
                String data = request.getParameter("data");
                String data2 = request.getParameter("data2");
                Boolean passMatch;
                passMatch = data.equals(data2);
                response.setContentType("application/json");
                try (PrintWriter out = response.getWriter()) {
                    /* TODO output your page here. You may use following sample code. */
                    out.println(passMatch);
                }
            }
            //Check email validation
            if ("email".equals(typeOfField)) {
                String myReq = request.getParameter("data");
                Boolean validEmail = UserDB.checkValidEmail(myReq);
                response.setContentType("application/json");
                try (PrintWriter out = response.getWriter()) {
                    /* TODO output your page here. You may use following sample code. */
                    out.println(validEmail);
                }

            }
            //name pattern validation
            if ("name".equals(typeOfField)) {
                String data = request.getParameter("data");
                response.setContentType("application/json");
                try (PrintWriter out = response.getWriter()) {
                    if (data.matches("^.{3,15}$")) {
                        out.println(true);
                    } else {
                        out.println(false);
                    }
                }

            }
            //sirName pattern validation
            if ("sName".equals(typeOfField)) {
                String data = request.getParameter("data");
                response.setContentType("application/json");
                try (PrintWriter out = response.getWriter()) {
                    if (data.matches("^.{3,15}$")) {
                        out.println(true);
                    } else {
                        out.println(false);
                    }
                }

            }
            //town pattern validation
            if ("town".equals(typeOfField)) {
                String data = request.getParameter("data");
                response.setContentType("application/json");
                try (PrintWriter out = response.getWriter()) {
                    if (data.matches("^.{3,20}$")) {
                        out.println(true);
                    } else {
                        out.println(false);
                    }
                }
            }

            //Submition and Creation of the new User
            if ("submit".equals(typeOfField)) {
                String username = request.getParameter("username");
                String email = request.getParameter("email");
                String psw = request.getParameter("psw");
                String name = request.getParameter("name");
                String sName = request.getParameter("sName");
                String birthday = request.getParameter("birthday");
                String occupation = "unemployed";
                String strDate = request.getParameter("strDate");
                String sex = request.getParameter("sex");
                String country = request.getParameter("country");
                String town = request.getParameter("town");
                String address = request.getParameter("address");
                String myTextArea = request.getParameter("myTextArea");
                String generalInfo = request.getParameter("generalInfo");

                User user = new User();
                user.setUserName(username);
                user.setEmail(email);
                user.setPassword(psw);
                user.setFirstName(name);
                user.setLastName(sName);
                user.setBirthDate(birthday);
                user.setRegisteredSince(strDate);
                user.setCountry(country);
                user.setTown(town);
                user.setAddress(address);
                user.setOccupation(occupation);
                user.setGender(sex);
                user.setInterests(myTextArea);
                user.setInfo(generalInfo);

                UserDB.addUser(user);
                //List<User> users = UserDB.getUsers();
                user = UserDB.getUser(username);

                //String objectToReturn = "{ userName: '" + username + "', email: '" + email + "',firstName: '" + name + "',lastName: '" + sName + "',gender: '" + sex + "' }";
                String json = new Gson().toJson(user);

                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                try (PrintWriter out = response.getWriter()) {
                    out.write(json);

                }
            }

            // login validation
            if ("submitLogin".equals(typeOfField)) {
                String username = request.getParameter("username");
                String password = request.getParameter("password");
                User user = new User();
                Boolean userExists = !UserDB.checkValidUserName(username);
                Boolean allCorrect = false;
                String json = "false";
                if (userExists) {
                    user = UserDB.getUser(username);
                    String passwordDB = user.getPassword();
                    if (passwordDB.equals(password)) {
                        allCorrect = true;
                        json = new Gson().toJson(user);
                    }
                }
                //Creation of the Coookie for the user
                if (allCorrect) {
                    Random rand = new Random();
                    Cookie persistentCookie = new Cookie("User", username);
                    persistentCookie.setMaxAge(3600);
                    response.addCookie(persistentCookie);
                }


                response.setContentType("application/json");
                response.setCharacterEncoding("UTF-8");
                try (PrintWriter out = response.getWriter()) {
                    if (allCorrect == true) {
                        out.println(json);
                    } else {
                        out.println(false);
                    }

                }
            }

        } catch (ClassNotFoundException ex) {
            Logger.getLogger(infoCheck.class.getName()).log(Level.SEVERE, null, ex);
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
