package com.ar.edu.um.coria.library.service.mapper;


import org.junit.jupiter.api.BeforeEach;

class BorrowedBookMapperTest {

    private BorrowedBookMapper borrowedBookMapper;

    @BeforeEach
    public void setUp() {
        borrowedBookMapper = new BorrowedBookMapperImpl();
    }
}
