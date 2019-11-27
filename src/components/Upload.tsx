import React from 'react'
import { Formik } from 'formik'
import yup from 'yup'

interface Props {
    file: any
}

interface MyState {
    loading: boolean
    thumb?: any
}

class Thumb extends React.Component<Props, MyState> {
    state = {
        loading: false,
        thumb: undefined,
    }

    componentWillReceiveProps(nextProps) {
        if (!nextProps.file) {
            return
        }

        this.setState({ loading: true }, () => {
            let reader = new FileReader()

            reader.readAsDataURL(nextProps.file)

            reader.onloadend = () => {
                this.setState({ loading: false, thumb: reader.result })
            }
        })
    }

    render() {
        const file = this.props
        const { loading, thumb } = this.state

        if (!file) {
            return null
        }

        if (loading) {
            return <p>loading...</p>
        }

        return (
            <img
                src={thumb}
                alt={'file.name'}
                className="img-thumbnail mt-2"
                height={200}
                width={200}
            />
        )
    }
}

const Upload = () => {
    return (
        <div className="container">
            <Formik
                initialValues={{ file: JSON.parse('null'), toto:JSON.parse('null') }}
                onSubmit={values => {
                    // values.toto = values;
                    // [0].map(s =>(<li key={s}>{s}</li>))
                    // return <div>{toto}</div>
                    alert(
                        JSON.stringify(
                            {
                                fileName: values.file.name,
                                type: values.file.type,
                                size: `${values.file.size} bytes`,
                            },
                            null,
                            2
                        )
                    )
                }}
                // validationSchema={yup.object().shape({
                //     file: yup.mixed().required(),
                // })}
                render={({ values, handleSubmit, setFieldValue }) => {
                    return (
                        <form onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label>Import fichier </label>
                                <input
                                    id="file"
                                    name="file"
                                    type="file"
                                    onChange={event => {
                                        setFieldValue(
                                            'file',
                                            event.currentTarget.files
                                                ? event.currentTarget.files[0]
                                                : null
                                        )
                                    }}
                                    className="form-control"
                                />
                                <Thumb file={values.file} />
                            </div>
                            <button type="submit" className="btn btn-primary">
                                submit
                            </button>
                        </form>
                    )
                }}
            />
        </div>
    )
}

export default Upload
