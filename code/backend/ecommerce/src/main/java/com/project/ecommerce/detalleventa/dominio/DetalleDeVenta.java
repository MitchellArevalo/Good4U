package com.project.ecommerce.detalleventa.dominio;

import com.project.ecommerce.clientes.dominio.Cliente;
import com.project.ecommerce.productos.dominio.Producto;

import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

public class DetalleDeVenta {
    private Long idDetalleDeVenta;
    private Integer cantidad;
    private LocalDateTime fechaDeVenta;
    private List<Producto> producto;
    private Cliente cliente;

    public void setProducto(List<Producto> producto) {
        this.producto = producto;
    }

    public Cliente getCliente() {
        return cliente;
    }

    public void setCliente(Cliente cliente) {
        this.cliente = cliente;
    }

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

    public LocalDateTime getFechaDeVenta() {
        return fechaDeVenta;
    }

    public void setFechaDeVenta(LocalDateTime fechaDeVenta) {
        this.fechaDeVenta = fechaDeVenta;
    }


}
