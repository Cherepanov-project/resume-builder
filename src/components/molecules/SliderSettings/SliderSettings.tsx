import { InboxOutlined } from '@ant-design/icons';
import { Form, Upload } from 'antd';
import classes from './SliderSettings.module.scss';
import { nanoid } from 'nanoid';
import { ISettingsInputUpdateProps } from '@/types/landingBuilder';
import SwiperPresetList from '../SwiperPresetList/SwiperPresetList';
import AddImageLinkInput from '@atoms/AddImageLinkInput';

const SliderSettings = ({ itemsList, setItemsList }: ISettingsInputUpdateProps) => {
  const formItemLayout = {
    labelCol: { span: 6 },
    wrapperCol: { span: '100%' },
  };

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const normFile = (e: any) => {
    console.log('Upload event:', e);
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <Form
      name="validate_other"
      {...formItemLayout}
      initialValues={{
        'input-number': 3,
        'checkbox-group': ['A', 'B'],
        rate: 3.5,
        'color-picker': null,
      }}
      className={classes.form}
    >
      <SwiperPresetList />

      <Form.Item>
        <Form.Item name="dragger" valuePropName="fileList" getValueFromEvent={normFile} noStyle>
          <Upload.Dragger
            name="files"
            beforeUpload={(file) => {
              setItemsList([...itemsList, { id: nanoid(), value: URL.createObjectURL(file) }]);

              // Prevent upload
              return false;
            }}
          >
            <p className="ant-upload-drag-icon">
              <InboxOutlined />
            </p>
            <p className="ant-upload-text">Click or drag file to this area to add slides</p>
          </Upload.Dragger>
        </Form.Item>
        <AddImageLinkInput 
          itemlist={itemsList.map(item => ({
            id: item.id || nanoid(),
            value: item.value || ''
          }))}
          setItemList={setItemsList} 
        />
      </Form.Item>
    </Form>
  );
};

export default SliderSettings;
