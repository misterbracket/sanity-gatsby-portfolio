import React from "react";
import ConvertKitForm from 'convertkit-react'

const MY_FORM_ID = 2542923


function NewsLetterCTA() {
  return (
    <ConvertKitForm formId={MY_FORM_ID} />
  )
}

export default NewsLetterCTA;
