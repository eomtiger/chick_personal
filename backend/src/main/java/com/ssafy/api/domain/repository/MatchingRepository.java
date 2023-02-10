package com.ssafy.api.domain.repository;

import com.ssafy.api.domain.entity.Matching;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Component;

import java.util.ArrayList;

@Component
public interface MatchingRepository extends JpaRepository<Matching, Integer> {
    ArrayList<Matching> findByMatEmailAndMatSession(String matEmail, String matSession);
    ArrayList<Matching> findByMatEmailAndMatVisitOrderByMatCreateDateDesc(String matEmail, String matVisit);
}
