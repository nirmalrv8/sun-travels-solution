package com.sun_travels.sun_travels.controller;

import com.sun_travels.sun_travels.model.Rooms;
import com.sun_travels.sun_travels.repository.RoomJpaRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rooms")
public class RoomController {

    @Autowired
    private RoomJpaRepository roomJpaRepo;

    @CrossOrigin
    @GetMapping(value = "/view")
    public List<Rooms> findAll() {
        return roomJpaRepo.findAll();
    }

    @PostMapping(value = "/load")
    public Rooms load(@RequestBody Rooms rooms) {
        roomJpaRepo.save(rooms);
        return rooms;
    }

}
