package com.project.ecommerce.personas.dominio;

public class Rol {
    private Long idRol;
    private String nombreRol;
    private Modulo modulo;

    public void setIdRol(Long idRol) {

        this.idRol = idRol;
    }

    public void setNombreRol(String nombreRol) {
        this.nombreRol = nombreRol;
    }

    public void setModulo(Modulo modulo) {
        this.modulo = modulo;
    }

    public Long getIdRol() {
        return idRol;
    }

    public String getNombreRol() {
        return nombreRol;
    }

    public Modulo getModulo() {
        return modulo;
    }
}
