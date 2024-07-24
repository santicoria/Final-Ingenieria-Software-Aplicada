package com.ar.edu.um.coria.library.service.mapper;

import com.ar.edu.um.coria.library.domain.Client;
import com.ar.edu.um.coria.library.service.dto.ClientDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Client} and its DTO {@link ClientDTO}.
 */
@Mapper(componentModel = "spring")
public interface ClientMapper extends EntityMapper<ClientDTO, Client> {}
