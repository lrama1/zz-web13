package com.sample.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

//import the domain
import com.sample.web.domain.Question;
import com.sample.common.ListWrapper;
import com.sample.dao.QuestionDAO;

@Service
public class QuestionService {

	@Autowired
	QuestionDAO questionDAO;

	public ListWrapper<Question> getQuestions(int pageNumber, int pageSize, String sortByAttribute,
			String sortDirection) {
		return questionDAO.getQuestions(pageNumber, pageSize, sortByAttribute, sortDirection);
	}

	public Question getQuestion(String id) {
		return questionDAO.getQuestion(id);
	}

	public void saveNewQuestion(Question question) {
		questionDAO.saveNewQuestion(question);
	}

	public void saveQuestion(Question question) {
		questionDAO.saveQuestion(question);
	}
}
