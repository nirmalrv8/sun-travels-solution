package com.sun_travels.sun_travels.controller;

import com.sun_travels.sun_travels.model.Room;
import com.sun_travels.sun_travels.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/rooms")
@CrossOrigin
public class RoomController {

    @Autowired
    RoomRepository roomRepository;

    @GetMapping("/view")
    public List<Room> getAll() {
        return roomRepository.findAll();
    }

    @PostMapping("/load")
    public Room addRoom(@RequestBody Room room) {
        roomRepository.save(room);
        return room;
    }

}
