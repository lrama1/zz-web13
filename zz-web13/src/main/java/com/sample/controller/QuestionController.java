package com.sample.controller;

import org.springframework.beans.factory.annotation.Autowired;
import java.security.Principal;
import javax.annotation.Resource;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;

//import the domain
import com.sample.web.domain.Question;
import com.sample.service.QuestionService;
import com.sample.common.ListWrapper;
import com.sample.common.NameValuePair;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.security.core.Authentication;
import org.springframework.context.MessageSource;

import java.util.List;
import java.util.ArrayList;

@RestController
public class QuestionController {

	@Autowired
	QuestionService questionService;

	@Resource(name = "messageSource")
	private MessageSource messageSource;

	//@PreAuthorize("@sampleUserDetailsService.isAuthorizedToAccessData(#id)")	
	@RequestMapping(value = "/question/{id}", method = RequestMethod.GET)
	public Question getQuestion(@PathVariable("id") String id, Principal principal) {
		Authentication authenticationToken = (Authentication) principal;
		Question question = questionService.getQuestion(id);
		if (question == null)
			return new Question();
		else
			return question;
	}

	@RequestMapping(value = "/question", headers = { "accept=application/json" }, method = RequestMethod.POST)
	public Question saveNewQuestion(@RequestBody Question question) {
		questionService.saveNewQuestion(question);
		return question;
	}

	@RequestMapping(value = "/question/{id}", headers = { "accept=application/json" }, method = RequestMethod.PUT)
	public Question updateQuestion(@RequestBody Question question) {
		questionService.saveQuestion(question);
		return question;
	}

	@RequestMapping("/questions")
	public ListWrapper<Question> getAllQuestions(@RequestParam("page") int pageNumber,
			@RequestParam("per_page") int pageSize,
			@RequestParam(value = "sort_by", required = false) String sortByAttributeName,
			@RequestParam(value = "order", required = false) String sortDirection) {
		return questionService.getQuestions(pageNumber, pageSize, sortByAttributeName, sortDirection);

	}

	//=============
}
