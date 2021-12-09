package com.snowy.cf5.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import java.util.Date;

@Entity
@Getter
@Setter
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @Column
    private Long postId;

    @Column(nullable = false)
    private String message;

    @Column(nullable = false)
    private Long postedBy;

    @Column
    private Date createdOn;
}

