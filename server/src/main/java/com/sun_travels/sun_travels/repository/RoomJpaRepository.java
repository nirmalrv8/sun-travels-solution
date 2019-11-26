package com.sun_travels.sun_travels.repository;

import com.sun_travels.sun_travels.model.Rooms;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

@Component
public interface RoomJpaRepository extends JpaRepository<Rooms, Integer> {
}
