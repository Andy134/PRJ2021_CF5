package com.snowy.cf5.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Getter
@Setter
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long tagId;

    @Column(nullable = false, unique = true)
    private String label;

    @Column(nullable = false, unique = true)
    private String value;
}
