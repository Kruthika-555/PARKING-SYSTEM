package com.parking.vehicle_parking_system.model;

import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Entity
@Table(name = "vehicles")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Vehicle {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true)
    private String vehicleNumber;

    @Column(nullable = false)
    private String vehicleType;

    @Column(nullable = false)
    private String ownerName;

    @Column(nullable = false)
    private String slotNumber;

    @Column(nullable = false)
    private LocalDateTime entryTime;

    private LocalDateTime exitTime;

    private Double fee;

    @Column(nullable = false)
    private String status;
}
