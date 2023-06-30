package com.project.ecommerce.clientes.infraestructure.entity;

import com.project.ecommerce.clientes.application.ClienteCrud;
import com.project.ecommerce.clientes.dominio.Cliente;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cliente")
public class ClienteController {
    private ClienteCrud clienteCrud;

    public ClienteController(ClienteCrud clienteCrud) {
        this.clienteCrud = clienteCrud;
    }

    /*@GetMapping("/{id}")
    ResponseEntity<Cliente> searchById(@PathVariable Long id){
    }*/

    @PostMapping("/save")
    ResponseEntity<Cliente> saveClient(@RequestBody Cliente cliente){
        return new ResponseEntity<>(clienteCrud.saveCliente(cliente), HttpStatus.CREATED);
    }
}
