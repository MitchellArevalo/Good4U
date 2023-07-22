package com.project.ecommerce.productos.dominio;

import com.project.ecommerce.proveedor.dominio.Proveedor;

public class Producto {
    private Long idProducto;
    private String nombre;
    private String talla;
    private String color;
    private String estilo;
    private String descripcion;
    private Integer precioDeVenta;
    private Integer stock;
    private Proveedor proveedor;

    public Long getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(Long idProducto) {
        this.idProducto = idProducto;
    }

    public String getNombre() {
        return nombre;
    }

    public void setNombre(String nombre) {
        this.nombre = nombre;
    }

    public String getTalla() {
        return talla;
    }

    public void setTalla(String talla) {
        this.talla = talla;
    }

    public String getColor() {
        return color;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public String getEstilo() {
        return estilo;
    }

    public void setEstilo(String estilo) {
        this.estilo = estilo;
    }

    public String getDescripcion() {
        return descripcion;
    }

    public void setDescripcion(String descripcion) {
        this.descripcion = descripcion;
    }

    public Integer getPrecioDeVenta() {
        return precioDeVenta;
    }

    public void setPrecioDeVenta(Integer precioDeVenta) {
        this.precioDeVenta = precioDeVenta;
    }

    public Integer getStock() {
        return stock;
    }

    public void setStock(Integer stock) {
        this.stock = stock;
    }

    public Proveedor getProveedor() {
        return proveedor;
    }

    public void setProveedor(Proveedor proveedor) {
        this.proveedor = proveedor;
    }




}
