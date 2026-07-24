package com.parking.vehicle_parking_system.repository;

import com.parking.vehicle_parking_system.model.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface VehicleRepository extends JpaRepository<Vehicle, Long> {
    List<Vehicle> findByStatus(String status);
    Vehicle findByVehicleNumber(String vehicleNumber);
}
