package com.snowy.cf5.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
public class Post {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long postId;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false)
    private String description;

    @Column
    private Long postedBy;

    @Column
    private Date createdOn;
}
