package com.sample.dao.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Param;
import org.apache.ibatis.annotations.Result;
import org.apache.ibatis.annotations.Results;
import org.apache.ibatis.annotations.Select;

import com.sample.web.domain.Question;

@Mapper
public interface QuestionMapper {

	public Question getQuestion(@Param("questionId") String questionId);

	public List<Question> getAllQuestions();

	public void updateQuestion(@Param("question") Question question);

	public void saveNewQuestion(@Param("question") Question question);

}
