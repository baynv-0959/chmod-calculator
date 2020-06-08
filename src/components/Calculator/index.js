import React, { Component } from 'react';
import Head from '../Head';
import Select from '../Select';
import Footer from '../Footer';
import { calculator, parseCalculatorToSymbol } from '../../utils/calculator';

class Calculator extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ownerSec: '0',
      ownerSym: '---',
      groupSec: '0',
      groupSym: '---',
      publicSec: '0',
      publicSym: '---',
      inputValue: '',
      symbolValue: ''
    }
  }

  handleOwner = (data) => {
    this.setState({
      ownerSec: calculator(data),
      ownerSym: parseCalculatorToSymbol(data),
      inputValue: `${calculator(data)}${this.state.groupSec}${this.state.publicSec}`,
      symbolValue: `${parseCalculatorToSymbol(data)}${this.state.groupSym}${this.state.publicSym}`,
    })
  };

  handleGroup = (data) => {
    this.setState({
      groupSec: calculator(data),
      groupSym: parseCalculatorToSymbol(data),
      inputValue: `${this.state.ownerSec}${calculator(data)}${this.state.publicSec}`,
      symbolValue: `${this.state.ownerSym}${parseCalculatorToSymbol(data)}${this.state.publicSym}`,
    })
  };

  handlePublic = (data) => {
    this.setState({
      publicSec: calculator(data),
      publicSym: parseCalculatorToSymbol(data),
      inputValue: `${this.state.ownerSec}${this.state.groupSec}${calculator(data)}`,
      symbolValue: `${this.state.ownerSym}${this.state.groupSym}${parseCalculatorToSymbol(data)}`,
    })
  };

  render() {
    return (
      <div class="container">
        <Head />
        <div class="row">
          <div class="col-12">
            <div class="row">
              <Select onSelectChange={this.handleOwner} title="Owner" />
              <Select onSelectChange={this.handleGroup} title="Group" />
              <Select onSelectChange={this.handlePublic} title="Public" />
            </div>
          </div>
          <div class="col-xs-12">
            <div class="row">
              <div class="col-xs-12">
                <div class="row">
                  <div class="form-group row">
                    <label for="c-oct" class="col-sm-4 control-label">Linux Permissions:</label>
                    <div class="col-sm-4 padding-top">
                      <input type="text" value={this.state.inputValue} class="form-control" placeholder="0666" />
                    </div>
                    <div class="col-sm-4 padding-top">
                      <input type="text" value={this.state.symbolValue} class="form-control" placeholder="-rw-rw -rw-" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  };
}

export default Calculator;
