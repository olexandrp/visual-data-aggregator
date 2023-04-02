import * as React from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import ImportSettings from '@/components/ImportSettings/ImportSettings'
import RunSettings from '@/components/RunSettings/RunSettings'
import * as _ from 'lodash-es'

export type TabType = {
  value: string
  label: string
  component: React.ComponentClass
  default?: boolean
}

const TabToComponent: TabType[] = [
  { value: 'import', label: 'Import', component: ImportSettings, default: true },
  { value: 'run', label: 'Run', component: RunSettings },
];

const getDefaultTab = () => {
  const tabModel = _.find(TabToComponent, { default: true })
  return _.get(tabModel, 'value')
}

const TabContent = ({ value }: { value: string }) => {
  const tabModel = _.find(TabToComponent, { value })
  const Component = _.get(tabModel, 'component')
  return Component ? <Component /> : null
}

export type SettingsPropsType = {}

export type SettingsStateType = {
  value?: string;
}

class Settings extends React.Component<SettingsPropsType, SettingsStateType> {
  state = {
    value: getDefaultTab()
  }

  handleChange = (_event: React.SyntheticEvent, value: any) => {
    this.setState({ value })
  }

  render() {
    const { value } = this.state
    return value ? (
        <>
          <Tabs value={value} onChange={this.handleChange}>
            {_.map(TabToComponent, model => {
              const value = _.get(model, 'value')
              const label = _.get(model, 'label')
              return <Tab key={value} value={value} label={label} />
            })}
          </Tabs>
          <TabContent value={value} />
        </>
    ) : null
  }
}

export default Settings