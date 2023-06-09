package com.ssafy.api.domain.entity;

import io.swagger.annotations.ApiModel;
import lombok.*;
import org.springframework.data.annotation.CreatedBy;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedBy;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.data.jpa.convert.threeten.Jsr310JpaConverters;

import javax.persistence.*;
import java.time.LocalDateTime;

@Entity
@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor(access= AccessLevel.PROTECTED)
@ApiModel(value = "REPORT : 신고내역", description = "관리자페이지에서 관리할 신소내역 정보를 나타낸다.")
@Table(name = "REPORT")
public class Report {
    @Id
    @GeneratedValue
    @Column(name ="RP_ID", columnDefinition = "INT UNSIGNED")
    private int id;

    private String rpReporter;
    private String rpReportedPeople;
    private String rpCategory;
    private String rpContent;
    private int rpHandling;

    @CreatedBy
    @Column(updatable = false)
    private String rpCreateBy;
    @CreatedDate
    @Column(updatable = false)
    @Convert(converter = Jsr310JpaConverters.LocalDateTimeConverter.class)
    private LocalDateTime rpCreateDate;
    @LastModifiedBy
    private String rpUpdateBy;
    @LastModifiedDate
    @Column(nullable = false)
    @Convert(converter = Jsr310JpaConverters.LocalDateTimeConverter.class)
    private LocalDateTime rpUpdateDate;
}
