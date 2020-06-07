package ifms.aula;

import java.util.Date;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

@Document(collection = "javaTodo")
public class Todo {
	
	@Id
	private String id;
	
	private String description;
	
	private Date createdAt = new Date();
	
	private boolean done = false;
	
	

	public String getId() {
		return id;
	}

	public void setId(String id) {
		this.id = id;
	}

	public String getDescription() {
		return descricao;
	}

	public void setDescription(String description) {
		this.description = description;
	}
	
	

}
