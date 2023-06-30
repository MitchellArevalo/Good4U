package com.project.ecommerce.clientes.infraestructure.entity.adaptador;

import com.project.ecommerce.clientes.dominio.Cliente;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface ClienteRepositorio extends JpaRepository<Cliente, Long> {
    @Query("SELECT u FROM cliente u WHERE u.id=?1")
    Optional<Cliente> n(Long id);



}
