package com.project.ecommerce.productos.infraestructure.entity;

import com.project.ecommerce.proveedor.dominio.Proveedor;

import javax.persistence.*;
import java.math.BigDecimal;

@Entity
@Table(name = "Productos" )
public class ProductoEntity {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name="producto_id")
    private Long idProducto;
    @Column(name="producto_name")
    private String nombre;
    @Column(name="producto_size")
    private String talla;
    @Column(name="producto_color")
    private String color;
    @Column(name="producto_style")
    private String estilo;
    @Column(name="producto_description")
    private String descripcion;
    @Column(name="producto_precio_venta")
    private BigDecimal precioDeVenta;
    @Column(name="producto_stock")
    private Integer stock;
    @Column(name = "detalle_id_proveedor")
    private Long idDetalleProveedor;
    /*@OneToMany
    @JoinColumn(name="detalle_id_proveedor", insertable = false, updatable = false)
    private Proveedor proveedor;*/
}
