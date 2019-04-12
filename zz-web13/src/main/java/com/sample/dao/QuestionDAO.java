package com.sample.dao;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.HashMap;
import java.util.LinkedHashMap;

import javax.annotation.PostConstruct;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
//import the domain
import com.sample.web.domain.Question;
import com.sample.common.ListWrapper;
import com.sample.dao.QuestionDAO;
import com.sample.dao.mapper.QuestionMapper;
import java.io.BufferedReader;
import java.io.InputStream;
import java.io.InputStreamReader;

@Repository
public class QuestionDAO {

	@Autowired
	private QuestionMapper questionMapper;

	//private List<Question> allQuestion = new ArrayList<Question>();
	private Map<String, Question> allData = new LinkedHashMap<String, Question>();

	@PostConstruct
	public void init() {

		InputStream is = getClass().getResourceAsStream("/sampledata/Questions.txt");
		BufferedReader reader = new BufferedReader(new InputStreamReader(is));
		String line = "";
		try {
			while ((line = reader.readLine()) != null) {
				String data[] = line.split(",");
				Question question = new Question();
				//person.setId(data[0]);
				//person.setFirstName(data[1]);
				//person.setLastName(data[2]);
				question.setQuestionId(data[0]);
				question.setQuestionText(data[1]);
				question.setQuestionAnswer(data[2]);
				question.setVisible(data[3]);
				allData.put(data[0], question);
			}
		} catch (Exception e) {
			e.printStackTrace();
		}
	}

	public Question getQuestion(String id) {
		return questionMapper.getQuestion(id);
	}

	public void saveNewQuestion(Question question) {
		questionMapper.saveNewQuestion(question);
	}

	public void saveQuestion(Question question) {
		questionMapper.updateQuestion(question);
	}

	public ListWrapper<Question> getQuestions(int page, int pageSize, String sortByAttributeName,
			String sortDirection) {

		List<Question> allDataList = questionMapper.getAllQuestions();
		List<Question> partialPage = new ArrayList<Question>();
		int end = (page * pageSize);
		int start = (end) - pageSize;
		int totalPages = roundUp(allDataList.size(), pageSize);

		if (end > allDataList.size())
			end = allDataList.size();
		if (start < allDataList.size())
			partialPage = allDataList.subList(start, end);
		Long totalRows = new Long(allDataList.size());

		ListWrapper<Question> listWrapper = new ListWrapper<Question>();
		listWrapper.setRows(partialPage);
		listWrapper.setTotalRecords(totalRows.intValue());
		listWrapper.setLastPage(totalPages);
		return listWrapper;
	}

	private int roundUp(int num, int divisor) {
		return (num + divisor - 1) / divisor;
	}
}
