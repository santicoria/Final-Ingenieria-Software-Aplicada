package com.ar.edu.um.coria.library.service.mapper;


import static org.junit.Assert.assertNull;
import static org.junit.jupiter.api.Assertions.assertEquals;

import com.ar.edu.um.coria.library.domain.Book;
import com.ar.edu.um.coria.library.service.dto.BookDTO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class BookMapperTest {

    private BookMapper bookMapper;

    @BeforeEach
    public void setUp() {
        bookMapper = new BookMapperImpl();
    }

    @Test
    public void testDtoToBookMapping() {
        BookDTO bookDTO = new BookDTO();
        bookDTO.setId(1L);
        bookDTO.setIsbn("9788845292613");
        bookDTO.setName("El Señor de los Anillos");
        bookDTO.setPublishYear("1954");
        bookDTO.setCopies(200);

        Book book = bookMapper.toEntity(bookDTO);

        assertEquals(book.getId(), bookDTO.getId());
        assertEquals(book.getIsbn(), bookDTO.getIsbn());
        assertEquals(book.getName(), bookDTO.getName());
        assertEquals(book.getPublishYear(), bookDTO.getPublishYear());
        assertEquals(book.getCopies(), bookDTO.getCopies());
    }

    @Test
    public void testBookToDtoMapping() {
        Book book = new Book();
        book.setId(1L);
        book.setIsbn("9788845292613");
        book.setName("El Señor de los Anillos");
        book.setPublishYear("1954");
        book.setCopies(200);

        BookDTO bookDTO = bookMapper.toDto(book);

        assertEquals(book.getId(), bookDTO.getId());
        assertEquals(book.getIsbn(), bookDTO.getIsbn());
        assertEquals(book.getName(), bookDTO.getName());
        assertEquals(book.getPublishYear(), bookDTO.getPublishYear());
        assertEquals(book.getCopies(), bookDTO.getCopies());
    }

    @Test
    public void testNullDtoToBookMapping() {
        BookDTO bookDTO = null;
        Book book = bookMapper.toEntity(bookDTO);
        assertNull(book);
    }

}
