import React, { Component } from "react";

class RecipeNew extends Component {
    state = {
        title: "",
        name: "",
        level: ""
    };

    submitHandler = () => {};

    render() {
        return (
            <div className="container">
                <div className="mt-5 pt-5">
                    <h6>New Recipe</h6>
                    <div className="card card-body p-3">
                        <form onSubmit={this.submitHandler}>
                            <div class="form-group">
                                <label for="exampleInputEmail1">
                                    Recipe Name
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter Recipe Name"
                                    value={this.state.name}
                                    onChange={() =>
                                        this.setState({ name: this.value })
                                    }
                                />
                            </div>

                            <div class="form-group">
                                <label for="exampleInputEmail1">
                                    Recipe Title
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter Recipe Title"
                                    value={this.state.title}
                                    onChange={() =>
                                        this.setState({ title: this.value })
                                    }
                                />
                            </div>
                            <div class="form-group">
                                <label for="exampleInputEmail1">
                                    Recipe Level
                                </label>
                                <input
                                    type="text"
                                    class="form-control"
                                    id="exampleInputEmail1"
                                    aria-describedby="emailHelp"
                                    placeholder="Enter Recipe Level"
                                    value={this.state.level}
                                    onChange={() =>
                                        this.setState({ level: this.value })
                                    }
                                />
                            </div>

                            <button type="submit" class="btn btn-primary">
                                Add Recipe
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default RecipeNew;
