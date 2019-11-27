package com.sun_travels.sun_travels.repository;

import com.sun_travels.sun_travels.model.Room;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RoomRepository extends JpaRepository<Room, Integer> {
}
