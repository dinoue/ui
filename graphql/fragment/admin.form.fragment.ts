import {gql} from 'apollo-boost'

export interface AdminFormPageFragment {
  show: boolean
  title?: string
  paragraph?: string
  buttonText?: string
  buttons: {
    url?: string
    action?: string
    text?: string
    bgColor?: string
    color?: string
  }[]
}

export interface AdminFormFieldFragment {
  id: string
  title: string
  type: string
  description: string
  required: boolean
  value: string
}

export interface AdminFormFragment {
  id?: string
  title: string
  created: string
  lastModified?: string
  language: string
  showFooter: boolean
  isLive: boolean
  fields: AdminFormFieldFragment[]
  selfNotifications: {
    enabled: boolean
    subject?: string
    htmlTemplate?: string
    fromField?: string
    toEmail?: string
  }
  respondentNotifications: {
    enabled: boolean
    subject?: string
    htmlTemplate?: string
    toField?: string
    fromEmail?: string
  }
  design: {
    colors: {
      backgroundColor: string
      questionColor: string
      answerColor: string
      buttonColor: string
      buttonTextColor: string
    }
    font?: string
  }
  startPage: AdminFormPageFragment
  endPage: AdminFormPageFragment
  admin: {
    id: string
    username: string
    email: string
  }
}

export const ADMIN_FORM_FRAGMENT = gql`
  fragment AdminForm on Form {
    id
    title
    created
    lastModified
    language
    showFooter
    isLive
    
    fields {
      id
      title
      type
      description
      required
      value
    }
    
    selfNotifications {
      enabled
      subject
      htmlTemplate
      fromField
      toEmail
    }
    respondentNotifications {
      enabled
      subject
      htmlTemplate
      toField
      fromEmail
    }
    design {
      colors {
        backgroundColor
        questionColor
        answerColor
        buttonColor
        buttonTextColor
      }
      font
    }
    startPage {
      show
      title
      paragraph
      buttonText
      buttons {
        url
        action
        text
        bgColor
        color
      }
    }
    endPage {
      show
      title
      paragraph
      buttonText
      buttons {
        url
        action
        text
        bgColor
        color
      }
    }
    admin {
      id
      username
      email
    }
  }
`