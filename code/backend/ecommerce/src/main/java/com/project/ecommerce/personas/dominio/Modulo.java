package com.project.ecommerce.personas.dominio;

public class Modulo {
    private Long idModulo;
    private String nombreModulo;
    private boolean permisoModulo;

    public Long getIdModulo() {
        return idModulo;
    }

    public void setIdModulo(Long idModulo) {
        this.idModulo = idModulo;
    }

    public String getNombreModulo() {
        return nombreModulo;
    }

    public void setNombreModulo(String nombreModulo) {
        this.nombreModulo = nombreModulo;
    }

    public boolean isPermisoModulo() {
        return permisoModulo;
    }

    public void setPermisoModulo(boolean permisoModulo) {
        this.permisoModulo = permisoModulo;
    }
}
