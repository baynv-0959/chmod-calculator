import React, { Component } from 'react';

class Footer extends Component {
  render() {
    return (
      <div class="row instruction">
        <div class="col-xs-12">
          <dl>
            <dt>Chmod Calculator</dt>
            <dd>Chmod Calculator is a free utility to calculate the numeric (octal) or symbolic value for a set of file or folder permissions in Linux servers.</dd>
            <dt>How to use</dt>
            <dd>Check the desired boxes or directly enter a valid numeric value (e.g. <samp>777</samp>) or symbolic notation (e.g. <samp>rwxrwxrwx</samp>) to see its value in other formats.</dd>
            <dt>File Permissions</dt>
            <dd>File permissions in Linux file system are managed in three distinct user classes: user/owner, group and others/public. Each class can have read, write and execute permissions. File permission can be represented in a symbolic or numeric (octal) format.</dd>
          </dl>
        </div>
      </div>
    )
  }
}

export default Footer;
