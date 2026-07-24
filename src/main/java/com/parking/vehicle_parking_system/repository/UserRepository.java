package com.parking.vehicle_parking_system.repository;

import com.parking.vehicle_parking_system.model.User;
import org.springframework.data.jpa.repository.JpaRepository;

public interface UserRepository extends JpaRepository<User, Long> {

}