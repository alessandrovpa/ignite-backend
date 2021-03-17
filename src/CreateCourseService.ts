interface RequestDTO {
  name: string;
  duration: number;
  educator: string;
}

class CreateCourseService {
  public execute({ name, duration, educator }: RequestDTO) {}
}

export default new CreateCourseService();
