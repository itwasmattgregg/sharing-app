import { Form, TextField, Submit, useMutation, FormError } from '@redwoodjs/web'
import { TextAreaField, FieldError } from '@redwoodjs/web/dist/form/form'
import { useForm } from 'react-hook-form'
import MainLayout from 'src/layouts/MainLayout/MainLayout'

const ContactPage = () => {
  const formMethods = useForm()
  const CREATE_CONTACT = gql`
    mutation CreateContactMutation($input: CreateContactInput!) {
      createContact(input: $input) {
        id
      }
    }
  `

  const [create, { loading, error }] = useMutation(CREATE_CONTACT, {
    onCompleted: () => {
      alert('Thank you for your submission')
      formMethods.reset()
    },
  })

  const onSubmit = (data) => {
    create({ variables: { input: data } })
  }

  return (
    <MainLayout>
      <Form
        onSubmit={onSubmit}
        validation={{ mode: 'onBlur' }}
        error={error}
        formMethods={formMethods}
      >
        <FormError
          error={error}
          wrapperStyle={{ color: 'red', backgroundColor: 'lavenderblush' }}
        />

        <label htmlFor="name">Name</label>
        <TextField
          name="name"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="name" className="error" />

        <label htmlFor="email">Email</label>
        <TextField
          name="email"
          validation={{
            required: true,
            pattern: {
              value: /[^@]+@[^.]+\..+/,
              message: 'Please enter a valid email address',
            },
          }}
          errorClassName="error"
        />
        <FieldError name="email" className="error" />

        <label htmlFor="message">Message</label>
        <TextAreaField
          name="message"
          validation={{ required: true }}
          errorClassName="error"
        />
        <FieldError name="message" className="error" />

        <Submit disabled={loading}>Save</Submit>
      </Form>
    </MainLayout>
  )
}

export default ContactPage
