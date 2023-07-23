package com.project.ecommerce.detalleventa.dominio;

import com.project.ecommerce.productos.dominio.Producto;

import java.util.Date;

public class DetalleDeVenta {
    private Long idDetalleDeVenta;
    private Integer cantidad;
    private Date fechaDeVenta;

    public Long getIdDetalleDeVenta() {
        return idDetalleDeVenta;
    }

    public void setIdDetalleDeVenta(Long idDetalleDeVenta) {
        this.idDetalleDeVenta = idDetalleDeVenta;
    }

    public Integer getCantidad() {
        return cantidad;
    }

    public void setCantidad(Integer cantidad) {
        this.cantidad = cantidad;
    }

    public Date getFechaDeVenta() {
        return fechaDeVenta;
    }

    public void setFechaDeVenta(Date fechaDeVenta) {
        this.fechaDeVenta = fechaDeVenta;
    }

    public Producto getProducto() {
        return producto;
    }

    public void setProducto(Producto producto) {
        this.producto = producto;
    }

    private Producto producto;

}
