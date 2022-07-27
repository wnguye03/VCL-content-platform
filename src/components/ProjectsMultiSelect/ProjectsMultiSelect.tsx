import TextField from "@mui/material/TextField";
import {Autocomplete} from "@material-ui/lab";
import React from "react";

// @ts-ignore
const ProjectsMultiSelect = ({project, setProject}) => {

    //TODO replace dummy projects
    const dummyProjects = [{
        name: "Correlation"
    },
        {
            name: "Nova"
        }, {
            name: "Perceptual Modes"
        }, {
            name: "IDEO"
        }, {
            name: "IT"
        }, {
            name: "Dormant"
        }]

    return (
        <Autocomplete
            multiple
            style={{
                width: 317,
                paddingBottom: 30,
            }}
            filterSelectedOptions
            getOptionSelected={(option, value) => option.name === value.name}
            // @ts-ignore
            onChange={(event, value) => setProject(value)}
            ChipProps={{
                style: {
                    backgroundColor: "#1E5487",
                    borderRadius: "5px",
                    color: "#fff",
                }
            }}
            id="tags-standard"
            options={project.length === 0 ? dummyProjects : []}
            getOptionLabel={option => option.name}
            renderInput={params => (
                <TextField
                    required={project.length === 0}
                    {...params}
                    style={{
                        borderRadius: "10px",
                    }}
                    variant="outlined"
                    label="Projects"
                    id="custom-css-outlined-input"
                />
            )}
        />
    )
}

export default ProjectsMultiSelect
