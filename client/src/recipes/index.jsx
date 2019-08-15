import React, { Component } from "react";

import axios from "axios";

class RecipeIndex extends Component {
    state = {
        recipes: []
    };

    componentDidMount() {
        let recipes = [
            {
                id: 1,
                title: "Recipe One",
                name: "Burger",
                level: 2
            },
            {
                id: 2,
                title: "Recipe Two",
                name: "Pizza",
                level: 3
            }
        ];

        this.setState({ recipes });
    }

    render() {
        return (
            <div className="container">
                <div className="mt-5 pt-5">
                    <h6>All Recipes</h6>

                    <table className="table table-bordered">
                        <thead>
                            <tr>
                                <th>Sl</th>
                                <th>Title</th>
                                <th>Name</th>
                                <th>Level</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.recipes.map(r => (
                                <tr>
                                    <td>{r.id}</td>
                                    <td>{r.title}</td>
                                    <td>{r.name}</td>
                                    <td>{r.level}</td>
                                    <td>
                                        <button className="btn btn-info mr-2">
                                            Show
                                        </button>
                                        <button className="btn btn-danger">
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>
        );
    }
}

export default RecipeIndex;
