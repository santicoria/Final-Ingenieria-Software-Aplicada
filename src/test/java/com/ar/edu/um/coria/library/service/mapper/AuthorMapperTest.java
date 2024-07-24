package com.ar.edu.um.coria.library.service.mapper;


import static org.junit.Assert.assertNull;
import static org.junit.jupiter.api.Assertions.assertEquals;

import com.ar.edu.um.coria.library.domain.Author;
import com.ar.edu.um.coria.library.service.dto.AuthorDTO;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

class AuthorMapperTest {

    private AuthorMapper authorMapper;

    @BeforeEach
    public void setUp() {
        authorMapper = new AuthorMapperImpl();
    }

    @Test
    public void testDtoToAuthorMapping() {
        AuthorDTO authorDTO = new AuthorDTO();
        authorDTO.setId(1L);
        authorDTO.setFirstName("John Ronald Reuel");
        authorDTO.setLastName("Tolkien");

        Author author = authorMapper.toEntity(authorDTO);

        assertEquals(author.getId(), authorDTO.getId());
        assertEquals(author.getFirstName(), authorDTO.getFirstName());
        assertEquals(author.getLastName(), authorDTO.getLastName());
    }

    @Test
    public void testAuthorToDtoMapping() {
        Author author = new Author();
        author.setId(1L);
        author.setFirstName("John Ronald Reuel");
        author.setLastName("Tolkien");

        AuthorDTO authorDTO = authorMapper.toDto(author);

        assertEquals(author.getId(), authorDTO.getId());
        assertEquals(author.getFirstName(), authorDTO.getFirstName());
        assertEquals(author.getLastName(), authorDTO.getLastName());
    }

    @Test
    public void testNullDtoToAuthorMapping() {
        AuthorDTO authorDTO = null;
        Author author = authorMapper.toEntity(authorDTO);
        assertNull(author);
    }
}
