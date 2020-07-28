import React, { Component, useState } from 'react';
import {
  Form,
  Input,
  Button,
  Radio,
  Select,
  Cascader,
  DatePicker,
  InputNumber,
  TreeSelect,
  Switch,
} from 'antd';

const Uniform = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };
  return (
    <div className="wrap-form">
      <Form
        labelCol={{
          span: 4,
        }}
        wrapperCol={{
          span: 14,
        }}
        layout="horizontal"
        initialValues={{
          size: componentSize,
        }}
        onValuesChange={onFormLayoutChange}
        size={componentSize}
      >
        <Form.Item label="" name="size">
          <Radio.Group>
            <Radio.Button value="small">SHORT</Radio.Button>
            <Radio.Button value="default">NEUTRAL</Radio.Button>
            <Radio.Button value="large">LONG</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item label="Name">
          <Input />
        </Form.Item>
        <Form.Item label="Asset">
          <Select>
            <Select.Option value="demo">TS#1x2vR45gh87Mo3q</Select.Option>
          </Select>
        </Form.Item>
        <Form.Item label="Pools">
          <TreeSelect
            treeData={[
              {
                title: 'Finance',
                value: 'defi',
                children: [
                  {
                    title: '1inch',
                    value: 'chi',
                  },
                  {
                    title: 'AAVE',
                    value: 'atokens',
                  },
                  {
                    title: 'Balancer',
                    value: 'bal',
                  },   
                  {
                    title: 'Curve',
                    value: 'crv',
                  },                                                          
                  {
                    title: 'dYdX',
                    value: 'dydx',
                  },                     
                ],
              },
              {
                title: 'Storage',
                value: 'file',
                children: [
                  {
                    title: 'IPFS',
                    value: 'ipfs',
                  },
                  {
                    title: 'libp2p',
                    value: 'lp2p',
                  },                  
                ],
              },              
            ]}
          />
        </Form.Item>
        <Form.Item label="Collateral">
          <Cascader
            options={[
              {
                value: 'cdp',
                label: '#CDP',
                children: [
                  {
                    value: 'bank',
                    label: 'BANK',
                  },
                  {
                    value: 'dai',
                    label: 'DAI',
                  },
                  {
                    value: 'eth',
                    label: 'ETH',
                  },
                  {
                    value: 'usd',
                    label: 'USD',
                  },                  
                ],
              },
              {
                value: 'farm',
                label: '#FARM',
                children: [
                  {
                    value: 'rbtc',
                    label: 'rBTC',
                  }, 
                  {
                    value: 'comp',
                    label: 'COMP',
                  },                                    
                  {
                    value: 'meta',
                    label: 'META',
                  },
                  {
                    value: 'usdc',
                    label: 'USDC',
                  },
                  {
                    value: 'weth',
                    label: 'WETH',
                  },                                    
                  {
                    value: 'yfi',
                    label: 'YFI',
                  },                                    
                ],              
              },
              {
                value: 'stk',
                label: '#STAKE',
                children: [
                  {
                    value: 'info',
                    label: 'INFO',
                  },
                  {
                    value: 'time',
                    label: 'TIME',
                  },
                  {
                    value: 'peer',
                    label: 'PEER',
                  },
                  {
                    value: 'eth2',
                    label: 'ETH2',
                  },                  
                ],              
              },
              {
                value: 'ETHER',
                label: '#3PT',
                children: [
                  {
                    value: 'apy',
                    label: 'APY',
                  },  
                  {
                    value: 'gas',
                    label: 'GAS',
                  },
                  {
                    value: 'cpi',
                    label: 'CPI',
                  },
                  {
                    value: 'ztc',
                    label: 'ZTC',
                  },                                  
                ],              
              },                            
            ]}
          />
        </Form.Item>
        <Form.Item className="tx-left" label="Quantity">
          <InputNumber />
        </Form.Item>
        <Form.Item className="tx-left" label="Interest">
          <Switch />
        </Form.Item>
        <Form.Item className="tx-left" label="End Date">
          <DatePicker />
        </Form.Item>        
        <Form.Item className="" label="">
          <Button className="gr-border">SAVE</Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Uniform