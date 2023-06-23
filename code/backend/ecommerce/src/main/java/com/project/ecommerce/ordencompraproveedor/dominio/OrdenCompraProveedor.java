package com.project.ecommerce.ordencompraproveedor.dominio;

import com.project.ecommerce.personas.dominio.Personas;
import com.project.ecommerce.proveedor.dominio.Proveedor;

import java.util.Date;

public class OrdenCompraProveedor {
    private Proveedor proveedor;
    private Date ordenFechaDeCompra;
    private Personas persona;

    public Proveedor getProveedor() {
        return proveedor;
    }

    public void setProveedor(Proveedor proveedor) {
        this.proveedor = proveedor;
    }

    public Date getOrdenFechaDeCompra() {
        return ordenFechaDeCompra;
    }

    public void setOrdenFechaDeCompra(Date ordenFechaDeCompra) {
        this.ordenFechaDeCompra = ordenFechaDeCompra;
    }

    public Personas getPersona() {
        return persona;
    }

    public void setPersona(Personas persona) {
        this.persona = persona;
    }
}
