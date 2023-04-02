import * as React from 'react'
import TextField from '@mui/material/TextField'
import * as _ from 'lodash-es'
import parser from '@/data/CSVParser/CSVParser'

class ImportSettings extends React.Component {
  handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const target = _.get(event, 'currentTarget')
    if (!target) {
      return
    }
    const files = _.get<typeof target, 'files'>(target, 'files')
    if (!files) {
      return
    }
    const file = _.first(files)
    if (!file) {
      return
    }

    // uploadedFile && uploadedFile.text().then((text) => {
    //   console.log('text', text)
    // });
    // console.log('text', uploadedFile.text());
    // console.log({uploadedFile});
    // parser.parse(uploadedFile.text());
  }

  render () {
    return (
      <div>
        <TextField name='csv-file' type='file' inputProps={{accept: 'text/csv'}} onChange={this.handleFileUpload} />
        Some other components here
      </div>
    )
  }
}

export default ImportSettings
