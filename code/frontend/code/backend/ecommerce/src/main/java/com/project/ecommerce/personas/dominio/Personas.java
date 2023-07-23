package com.project.ecommerce.personas.dominio;

public class Personas {
    private Long idPersona;
    private String username;
    private String contrasena;
    private String documento;
    private String nombre;
    private String email;

    public Long getIdPersona() {
        return idPersona;
    }

    public void setIdPersona(Long idPersona) {
        this.idPersona = idPersona;
    }

    public String getUsername() {
        return username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getContrasena() {
        return contrasena;
    }

    public void setContrasena(String contrasena) {
        this.contrasena = contrasena;
    }

    public String getDocumento() {
        return documento;
    }

    public void setDocumento(String documento) {
        this.documento = documento;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getNumericoTelefonico() {
        return numericoTelefonico;
    }

    public void setNumericoTelefonico(String numericoTelefonico) {
        this.numericoTelefonico = numericoTelefonico;
    }

    public Rol getRol() {
        return rol;
    }

    public void setRol(Rol rol) {
        this.rol = rol;
    }

    private String numericoTelefonico;
    private Rol rol;

}
