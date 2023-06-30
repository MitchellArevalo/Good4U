package com.project.ecommerce.detalleventa.infraestructure.entity;

import com.project.ecommerce.clientes.dominio.Cliente;
import com.project.ecommerce.productos.dominio.Producto;

import javax.persistence.*;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.Date;
import java.util.List;

@Entity
@Table(name="DetalleVenta")
public class DetalleDeVentaEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="detalle_id_venta")
    private Long idDetalleDeVenta;
    @Column(name="detalle_quantity")
    private Integer cantidad;
    @Column(name="detalle_fecha_venta")
    private LocalDateTime fechaDeVenta;
    @Column(name="producto_id")
    private String idProducto;
    @Column(name="cliente_id")
    private String idCliente;

  /*  @ManyToOne
    @JoinColumn(name="cliente_id", insertable = false, updatable = false)
    private Cliente cliente;*/

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

    public String getIdProducto() {
        return idProducto;
    }

    public void setIdProducto(String idProducto) {
        this.idProducto = idProducto;
    }

    public String getIdCliente() {
        return idCliente;
    }

    public void setIdCliente(String idCliente) {
        this.idCliente = idCliente;
    }
}
