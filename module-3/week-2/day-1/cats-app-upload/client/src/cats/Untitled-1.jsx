
/*
export default class FormUpdate extends Component {
  state = {
    isLoading: true,
    name: "",
    age: 0,
    color: "",
  };

  componentDidMount() {
    this.fetchCat();
  }

  fetchCat = () => {
    APIHandler.get("/api/cats/" + this.props.id).then((res) => {
      const { name, color, age } = res.data;
      this.setState({
        isLoading: false,
        name,
        color,
        age,
      });
    });
  };

  handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await APIHandler.patch("/api/cats/" + this.props.id, this.state);
      this.props.handleView(null, "create");
    } catch (err) {
      console.error(err);
    }
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return this.state.isLoading ? (
      <p>...loading</p>
    ) : (
      <form>
        <h1>update a cat</h1>
        <input
          name="name"
          type="text"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
        />
        <input
          name="color"
          type="text"
          placeholder="color"
          value={this.state.color}
          onChange={this.handleChange}
        />
        <input
          name="age"
          type="number"
          placeholder="age"
          value={this.state.age}
          onChange={this.handleChange}
        />
        <button onClick={this.handleSubmit}>ok</button>
      </form>
    );
  }
}
*/
