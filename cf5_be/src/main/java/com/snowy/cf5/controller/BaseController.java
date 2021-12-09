package com.snowy.cf5.controller;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class BaseController {
    @RequestMapping("/")
    public String welcome() {
        return "index";
    }
}
