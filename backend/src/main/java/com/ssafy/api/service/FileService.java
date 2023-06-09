package com.ssafy.api.service;

import com.ssafy.api.domain.dto.FileDto;
import com.ssafy.api.domain.entity.FileEntity;
import com.ssafy.api.domain.repository.FileRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@RequiredArgsConstructor
public class FileService {
    private final FileRepository fileRepository;

    public void save(FileDto fileDto) {
        FileEntity fileEntity = new FileEntity(fileDto.getUrl(), fileDto.getEmail());
        fileRepository.save(fileEntity);
    }

    public List<FileEntity> getFiles(String email) {
        List<FileEntity> all = fileRepository.findImagesByEmail(email);
        return all;
    }
}
