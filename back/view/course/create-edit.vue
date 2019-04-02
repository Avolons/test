<!--macarole@2019/4/2-->
<template>
  <div class="create-edit">
    <!--标题-->
    <header>
      <h2>创建课程</h2>
      <ButtonGroup class="button-group">
        <Button type="primary">确定</Button>
        <Button>取消</Button>
      </ButtonGroup>
    </header>
    <!--表单-->
    <Form
      ref="formValidate"
      :model="formValidate"
      :rules="ruleValidate"
      :label-width="80"
      class="form-wrapper"
    >
      <FormItem label="课程名称" prop="name">
        <Input v-model="formValidate.name" placeholder="请输入"></Input>
      </FormItem>
      <Row>
        <Col span="12">
          <FormItem label="学段/年级" prop="city">
            <Select v-model="formValidate.city" placeholder="Select your city">
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
          </FormItem>
        </Col>
        <Col span="12">
          <FormItem label="学段/年级" prop="city">
            <Select v-model="formValidate.city" placeholder="Select your city">
              <Option value="beijing">New York</Option>
              <Option value="shanghai">London</Option>
              <Option value="shenzhen">Sydney</Option>
            </Select>
          </FormItem>
        </Col>
      </Row>
      <FormItem label="E-mail" prop="mail">
        <Input
          v-model="formValidate.mail"
          placeholder="Enter your e-mail"
        ></Input>
      </FormItem>
      <FormItem label="City" prop="city">
        <Select v-model="formValidate.city" placeholder="Select your city">
          <Option value="beijing">New York</Option>
          <Option value="shanghai">London</Option>
          <Option value="shenzhen">Sydney</Option>
        </Select>
      </FormItem>
      <FormItem label="Date">
        <Row>
          <Col span="11">
            <FormItem prop="date">
              <DatePicker
                type="date"
                placeholder="Select date"
                v-model="formValidate.date"
              ></DatePicker>
            </FormItem>
          </Col>
          <Col span="2" style="text-align: center">-</Col>
          <Col span="11">
            <FormItem prop="time">
              <TimePicker
                type="time"
                placeholder="Select time"
                v-model="formValidate.time"
              ></TimePicker>
            </FormItem>
          </Col>
        </Row>
      </FormItem>
      <FormItem label="Gender" prop="gender">
        <RadioGroup v-model="formValidate.gender">
          <Radio label="male">Male</Radio>
          <Radio label="female">Female</Radio>
        </RadioGroup>
      </FormItem>
      <FormItem label="Hobby" prop="interest">
        <CheckboxGroup v-model="formValidate.interest">
          <Checkbox label="Eat"></Checkbox>
          <Checkbox label="Sleep"></Checkbox>
          <Checkbox label="Run"></Checkbox>
          <Checkbox label="Movie"></Checkbox>
        </CheckboxGroup>
      </FormItem>
      <FormItem label="Desc" prop="desc">
        <Input
          v-model="formValidate.desc"
          type="textarea"
          :autosize="{ minRows: 2, maxRows: 5 }"
          placeholder="Enter something..."
        ></Input>
      </FormItem>
      <FormItem>
        <Button type="primary" @click="handleSubmit('formValidate')"
          >Submit
        </Button>
        <Button @click="handleReset('formValidate')" style="margin-left: 8px"
          >Reset
        </Button>
      </FormItem>
    </Form>
  </div>
</template>

<script>
export default {
  name: "create-edit",
  data() {
    return {
      formValidate: {
        name: "",
        mail: "",
        city: "",
        gender: "",
        interest: [],
        date: "",
        time: "",
        desc: ""
      },
      ruleValidate: {
        name: [
          {
            required: true,
            message: "The name cannot be empty",
            trigger: "blur"
          }
        ],
        mail: [
          {
            required: true,
            message: "Mailbox cannot be empty",
            trigger: "blur"
          },
          { type: "email", message: "Incorrect email format", trigger: "blur" }
        ],
        city: [
          {
            required: true,
            message: "Please select the city",
            trigger: "change"
          }
        ],
        gender: [
          { required: true, message: "Please select gender", trigger: "change" }
        ],
        interest: [
          {
            required: true,
            type: "array",
            min: 1,
            message: "Choose at least one hobby",
            trigger: "change"
          },
          {
            type: "array",
            max: 2,
            message: "Choose two hobbies at best",
            trigger: "change"
          }
        ],
        date: [
          {
            required: true,
            type: "date",
            message: "Please select the date",
            trigger: "change"
          }
        ],
        time: [
          {
            required: true,
            type: "string",
            message: "Please select time",
            trigger: "change"
          }
        ],
        desc: [
          {
            required: true,
            message: "Please enter a personal introduction",
            trigger: "blur"
          },
          {
            type: "string",
            min: 20,
            message: "Introduce no less than 20 words",
            trigger: "blur"
          }
        ]
      }
    };
  }
};
</script>

<style scoped lang="scss">
.create-edit {
  header {
    $header-padding: 10px;
    background: #fff;
    position: relative;
    padding: 0 10px;
    line-height: 70px;
    border: 1px solid #eee;

    .button-group {
      position: absolute;
      right: $header-padding;
      top: 50%;
      transform: translateY(-50%);
    }
  }

  .form-wrapper {
    background: yellow;
  }
}
</style>
