package com.project.ecommerce.clientes.application;

import com.project.ecommerce.clientes.dominio.Cliente;
import com.project.ecommerce.clientes.infraestructure.entity.ClienteEntity;
import com.project.ecommerce.clientes.infraestructure.entity.adaptador.ClienteRepositorio;

import javax.transaction.Transactional;

public class ClienteCrud {
    private ClienteRepositorio clienteRepositorio;

    public ClienteCrud(ClienteRepositorio clienteRepositorio) {
        this.clienteRepositorio = clienteRepositorio;
    }

    public Cliente saveCliente(Cliente cliente){
        return clienteRepositorio.save(cliente);
    }
}
